import { Component, EventEmitter, Input, Output } from '@angular/core';
import { LoggingService } from '../logging.service';
import { accountService } from '../accounts.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
  providers: [LoggingService]
})
export class AccountComponent {
  @Input() account: { name: string, status: string };
  @Input() id: number;
  // @Output() statusChanged = new EventEmitter<{id: number, newStatus: string}>();

  constructor(private LoggingService: LoggingService,
    private accountService: accountService) { }
  onSetTo(status: string) {
    // this.statusChanged.emit({id: this.id, newStatus: status});

    this.accountService.updateAccount(this.id, status)
    this.accountService.statusUpdate.emit(status)
    // this.LoggingService.logStatusChange(status)
  }
}
