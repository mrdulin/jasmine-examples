import { webSocket } from 'rxjs/webSocket';

export function main() {
  return webSocket('ws://localhost:8081');
}
