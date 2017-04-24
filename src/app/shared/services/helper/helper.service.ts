import { Injectable } from '@angular/core';

import * as JsDiff from 'diff';

@Injectable()
export class HelperService {

  constructor() {
  }

  findDiff(text1, text2) {
    // TODO: Check what variant is better (send by chunks or whole editor)
    let x = JsDiff.diffLines(text1, text2);
  }

}
