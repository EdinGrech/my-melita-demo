import { usage } from '../mobile/mobileUse';
export interface mobile {
  id: number;
  name: string;
  type: string;
  line: number;
  usage: Array<usage>;
}
