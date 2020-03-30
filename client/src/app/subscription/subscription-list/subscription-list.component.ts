import { Component, OnInit } from '@angular/core';
import { SubscriptionService } from '../../service/subscription.service';

@Component({
  selector: 'app-subscription-list',
  templateUrl: './subscription-list.component.html',
  styleUrls: ['./subscription-list.component.css']
})
export class SubscriptionListComponent implements OnInit {

  Subscription: any = [];

  constructor(private subscriptionService: SubscriptionService) { 
    this.readSubscription();
  }

  ngOnInit() {
  }

  readSubscription(){
    this.subscriptionService.getSubscriptions().subscribe((data) => {
      this.Subscription = data;
    })
  }

  removeSubscription(subscription, index){
    if(window.confirm('Are you sure?')) {
      this.subscriptionService.deleteSubscription(subscription._id).subscribe((data) => {
        window.location.reload();
      }
      )    
    }
  }

}
