import { Component, ChangeDetectorRef, Inject } from '@angular/core'
import e from '../event-bus'

@Component({
  selector: 'AngularApp',
  template: `
		<div *ngIf="message" class="card">
      <h2 class="card-header">Angular Document</h2>
      <p>{{paragraph1}}</p>
      <br/>
      <p>{{paragraph2}}</p>
      <br/>
      <p>{{paragraph3}}</p>
      <br/>
      <p>{{paragraph4}}</p>
      <br/>
      <p>{{paragraph5}}</p>
		</div>
	`,
})
export default class AngularApp {
  message: boolean = false;
  paragraph1:string= "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lectus urna duis convallis convallis tellus. Felis eget nunc lobortis mattis aliquam faucibus. Semper auctor neque vitae tempus. Tristique risus nec feugiat in. Commodo elit at imperdiet dui accumsan. At imperdiet dui accumsan sit amet nulla facilisi morbi. Vitae congue mauris rhoncus aenean vel. Aliquam id diam maecenas ultricies mi eget. Pellentesque elit eget gravida cum sociis. Nec dui nunc mattis enim ut tellus elementum sagittis. In nisl nisi scelerisque eu."
  paragraph2:string= "Faucibus scelerisque eleifend donec pretium vulputate sapien. Tellus orci ac auctor augue mauris augue neque. Tellus in hac habitasse platea dictumst vestibulum. Urna condimentum mattis pellentesque id. In pellentesque massa placerat duis ultricies lacus sed turpis tincidunt. Morbi quis commodo odio aenean sed adipiscing. Placerat duis ultricies lacus sed turpis tincidunt. Sapien faucibus et molestie ac feugiat sed lectus. Mollis nunc sed id semper. Sagittis nisl rhoncus mattis rhoncus urna neque. Aenean vel elit scelerisque mauris pellentesque pulvinar pellentesque habitant morbi. Eu lobortis elementum nibh tellus molestie. Sit amet purus gravida quis blandit turpis cursus in hac. Blandit volutpat maecenas volutpat blandit aliquam. Natoque penatibus et magnis dis parturient montes nascetur. Eget nunc lobortis mattis aliquam faucibus purus."
  paragraph3:string= "Eget nunc scelerisque viverra mauris in aliquam sem. Ut placerat orci nulla pellentesque dignissim enim sit. Risus feugiat in ante metus dictum at. Et malesuada fames ac turpis egestas sed tempus urna et. Tristique senectus et netus et malesuada. Eu mi bibendum neque egestas. Gravida quis blandit turpis cursus in hac habitasse platea dictumst. Ut placerat orci nulla pellentesque dignissim enim sit amet venenatis. Pellentesque pulvinar pellentesque habitant morbi tristique senectus et netus. Suscipit adipiscing bibendum est ultricies integer quis auctor elit sed. Ac odio tempor orci dapibus ultrices in iaculis nunc sed. Tellus molestie nunc non blandit massa."
  paragraph4:string= "Neque aliquam vestibulum morbi blandit cursus. Purus semper eget duis at tellus at urna condimentum. Iaculis nunc sed augue lacus. Est sit amet facilisis magna etiam tempor orci eu. Nunc sed velit dignissim sodales ut eu sem. Et malesuada fames ac turpis egestas maecenas pharetra convallis posuere. Ac turpis egestas sed tempus urna et pharetra pharetra. Massa enim nec dui nunc mattis enim ut. Gravida neque convallis a cras semper auctor neque vitae tempus. Elit sed vulputate mi sit amet mauris commodo quis imperdiet. Sit amet facilisis magna etiam tempor orci eu lobortis. Nulla porttitor massa id neque aliquam vestibulum morbi. Faucibus a pellentesque sit amet porttitor eget dolor morbi. Cursus metus aliquam eleifend mi. Orci a scelerisque purus semper eget duis at tellus at. Viverra tellus in hac habitasse platea dictumst vestibulum rhoncus est."
  paragraph5:string= "Neque aliquam vestibulum morbi blandit cursus. Purus semper eget duis at tellus at urna condimentum. Iaculis nunc sed augue lacus. Est sit amet facilisis magna etiam tempor orci eu. Nunc sed velit dignissim sodales ut eu sem. Et malesuada fames ac turpis egestas maecenas pharetra convallis posuere. Ac turpis egestas sed tempus urna et pharetra pharetra. Massa enim nec dui nunc mattis enim ut. Gravida neque convallis a cras semper auctor neque vitae tempus. Elit sed vulputate mi sit amet mauris commodo quis imperdiet. Sit amet facilisis magna etiam tempor orci eu lobortis. Nulla porttitor massa id neque aliquam vestibulum morbi. Faucibus a pellentesque sit amet porttitor eget dolor morbi. Cursus metus aliquam eleifend mi. Orci a scelerisque purus semper eget duis at tellus at. Viverra tellus in hac habitasse platea dictumst vestibulum rhoncus est."
  constructor(@Inject(ChangeDetectorRef) private changeDetector: ChangeDetectorRef) {}

  ngAfterContentInit() {
    e.on('openDoc', (res)=> {
      this.message =res.isOpen
      this.changeDetector.detectChanges()
    })
  }

  // returnMessageToReactWhenReceived() {
  //   e.emit('received', { text: 'Woohoo! Hello from Angular! 🎉' })
  // }
}

