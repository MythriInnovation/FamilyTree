import { Contact} from './email';
import { Photo} from './photo';
export class Family {
    // public ema:Email;
    // public ema:Email;
//     constructor(em:Email[],ph:Photo[])
//     //   this.emailInfo=em;
//     //   this.photos = ph;
//       fields?: {
//             id?: number,
//             address?: string,
//             age?: number
//   }

 public constructor(
        fields?: {
            Id?: number,
            Name?: string,
            Place?: string,
            contactInfo:Contact[],
            ph:Photo,
            parentId:number
        }) {
        if (fields) Object.assign(this, fields);
    }

  public Id:number;
  public Name:string;
  public Place:string;
  public contactInfo:Contact[];
  public photos:Photo;
  public parentId:number;
  public Childrens:Family[];

}

