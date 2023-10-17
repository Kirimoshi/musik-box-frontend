/* eslint-disable import/no-anonymous-default-export */
import { Sidebar } from './sidebar';

class BaseElements {
  constructor() {
    this.sidebar = new Sidebar();
  }
}

export default BaseElements = new BaseElements();
