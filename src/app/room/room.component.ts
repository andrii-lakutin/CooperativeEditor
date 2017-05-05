import { Component, OnInit, ViewChild, OnDestroy, ElementRef } from '@angular/core';
import { AceEditorComponent } from 'ng2-ace-editor';
import { RouterService, BEService } from '../shared';

@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.scss']
})
export class RoomComponent implements OnInit, OnDestroy {
  @ViewChild('editor') editor: AceEditorComponent;
  @ViewChild('output') output: AceEditorComponent;
  @ViewChild('messagesContainer') messagesContainer: ElementRef;
  userNickname: string;
  userRoom: string;
  saver: any;
  chatMessages: Array<Message>;

  constructor(
    public routerService: RouterService,
    public beService: BEService
  ) {
    this.userNickname = '';
    this.userRoom = '';
    this.chatMessages = [];
  }

  ngOnInit(): void {
    this.beService.user$.subscribe((user: User) => {
      if (!user.nickname) {
        this.routerService.navigateToLogin();
      }
      this.userNickname = user.nickname;
      this.userRoom = user.roomName;
    });

    this.beService.file$.subscribe((file: string) => {
      this.editor.getEditor().setValue(file, 1);
    });

    this.beService.output$.subscribe((output: string) => {
      this.output.getEditor().setValue(output, 1);
    });

    this.beService.outputError$.subscribe((outputError: string) => {
      this.output.getEditor().setValue(outputError, -1);
    });

    this.beService.chatMessages$.subscribe((message: Message) => {
      if (message.from && message.content) {
        this.chatMessages.push(message);
        setTimeout(() => {
          this.messagesContainer.nativeElement.scrollTop = this.messagesContainer.nativeElement.scrollHeight;
        }, 0);
      }
    });

    this.saver = setInterval(() => {
      this.saveFile();
    }, 5000);

    this.beService.getChatMessages(this.userRoom);
    this.beService.getEditorValue(this.userRoom);

    this.initCustomCommands();
    // Just preventing some console pollution from editor library
    this.editor.getEditor().$blockScrolling = Infinity;
    this.output.getEditor().$blockScrolling = Infinity;
    // Disable vertical split line
    this.editor.getEditor().setOption('showPrintMargin', false);
    this.output.getEditor().setOption('showPrintMargin', false);
  }

  ngOnDestroy(): void {
    this.beService.logOut();
    clearInterval(this.saver);
  }

  private initCustomCommands(): void {
    this.editor.getEditor().commands.addCommand({
      name: 'runAndSave',
      bindKey: {win: 'Ctrl-S',  mac: 'Command-S'},
      exec: () => {
        if (this.editor.getEditor().getValue() === '') {
          this.output.getEditor().setValue('');
        }
        this.saveFile();
        this.runScript();
      },
      readOnly: true
    });
  }

  public sendMessage(msg: string): void {
    this.beService.sendMessage(msg, this.userNickname, this.userRoom);
  }

  public runScript(): void {
    this.beService.runScript(this.editor.getEditor().getValue().split('\n').join(''), this.userRoom);
  }

  public onEditorChanges(): void {
    this.beService.updateFile(this.editor.getEditor().getValue(), this.userRoom);
  }

  public saveFile(): void {
    this.beService.fileSave(this.editor.getEditor().getValue(), this.userRoom);
    console.log('File saved');
  }

}
