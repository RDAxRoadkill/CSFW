import { Component, OnInit } from '@angular/core';
import { SubscriptionService } from '../../service/subscription.service';
import { Subscription } from '../../model/subscription';

@Component({
  selector: 'app-subscription-list',
  templateUrl: './subscription-list.component.html',
  styleUrls: ['./subscription-list.component.css']
})
export class SubscriptionListComponent {

  Subscription: any = [];

  constructor(private subscriptionService: SubscriptionService) { 
    this.readSubscription();
  }

  readSubscription(){
    this.subscriptionService.getSubscriptions().subscribe((data:Subscription) => {
      this.Subscription = data;
      console.log(data);
    })
  }

  removeSubscription(subscription, index){
    if(window.confirm('Are you sure?')) {
      this.subscriptionService.deleteSubscription(subscription._id).subscribe((data:Subscription) => {
        window.location.reload();
      }
      )    
    }
  }

}
