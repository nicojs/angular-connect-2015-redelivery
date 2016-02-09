A code example
----------

```javascript
@Component({
    selector: 'checkbox',
    properties: ['checked : checked'],
    events: ['tap'],
    template: `
    <Image  [src]="checked ? 'res://checkbox_checked' : 'res://checkbox_unchecked'" 
            (tap)="onTap()" dock="left">
    </Image> `
})
export class Checkbox {
    public tap: EventEmitter<boolean> = new EventEmitter<boolean>();
    public checked: boolean = false;
    public onTap(): void {
        this.tap.next(this.checked);
    }
}
```
