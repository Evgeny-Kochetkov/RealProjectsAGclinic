export interface IServices {
    id: string;
    img: string;
    text: string;
    desc: string;
    problems: string[];
    services: IService[];
}
  
interface IService {
    id: string;
    img?: string;
    name: string;
    descMini: string;
    desc?: IDescription[];
}
  
interface IDescription {
    name: string;
    desc: IParagraph[];
}
  
interface IParagraph {
    border: boolean;
    text?: string;
    ul?: string[]
}
