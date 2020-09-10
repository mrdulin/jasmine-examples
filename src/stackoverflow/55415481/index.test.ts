import { main } from './';
import * as rxJsWebSocket from 'rxjs/webSocket';
import { Subject } from 'rxjs/internal/Subject';

describe('55415481', () => {
  it('should pass', () => {
    const subject = new Subject();
    const webSocketSpy = spyOn(rxJsWebSocket, 'webSocket').and.returnValue(<any>subject);
    const actual = main();
    expect(actual).toBe(<any>subject);
    expect(webSocketSpy).toHaveBeenCalledWith('ws://localhost:8081');
  });
});
