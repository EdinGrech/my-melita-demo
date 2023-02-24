import { usage } from '../subscription/usage';
export interface subscription {
  id: number;
  name: string;
  type: string;
  line: number;
  usage?: Array<usage>;
}
