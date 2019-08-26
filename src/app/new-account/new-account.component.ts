import { Component, EventEmitter, Output } from '@angular/core';
import { LoggingService } from '../logging.service';
import { accountService } from '../accounts.service';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],
  providers: [LoggingService]
})
export class NewAccountComponent {
  constructor(private LoggingService: LoggingService,
    private accountService: accountService
  ) { 

    this.accountService.statusUpdate.subscribe(
      (status:string)=>{
        alert(status)
      }
    )
  }

  onCreateAccount(accountName: string, accountStatus: string) {
    this.accountService.addAccount(accountName, accountStatus)
    // this.LoggingService.logStatusChange(accountStatus)

  }
}
