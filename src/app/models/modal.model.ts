export class Modal{
  title:string;
  icon:string;
  message:string;
  option:any;

  constructor(title:string,icon:string,message:string,option:any){
    this.title=title;
    this.icon=icon;
    this.message=message;
    this.option={}
  }
}
