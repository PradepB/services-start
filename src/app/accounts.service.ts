import { LoggingService } from "./logging.service";
import { Injectable, EventEmitter } from "@angular/core";
@Injectable()
export class accountService{
constructor(private LoggingService:LoggingService){

}

statusUpdate=new EventEmitter<string>()
    accounts = [
        {
          name: 'Master Account',
          status: 'active'
        },
        {
          name: 'Testaccount',
          status: 'inactive'
        },
        {
          name: 'Hidden Account',
          status: 'unknown'
        }
      ];

      addAccount(name:string,status:string){
          this.accounts.push({name:name,status:status})
          
    this.LoggingService.logStatusChange(status)
      }
      updateAccount(id:number,status:string){
        this.accounts[id].status =status;
        this.LoggingService.logStatusChange(status)
      }
}