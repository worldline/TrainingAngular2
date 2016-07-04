System.register(['@angular/core'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1;
    var Contact;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            Contact = (function () {
                function Contact() {
                    this.email = 'ecommerce@worldline-sdco.com';
                    this.phone = "+33 XXXXXXXXX";
                    this.address = "Rue de la pointe, 59113 Seclin";
                    this.message = "";
                }
                Contact.prototype.updateMessage = function (data) {
                    this.message = data.target.value;
                };
                Contact.prototype.sendMessage = function () {
                    this.message = "";
                };
                Contact = __decorate([
                    core_1.Component({
                        selector: 'contact',
                        templateUrl: 'src/components/contact/contact.html',
                        styleUrls: ['src/components/contact/contact.css']
                    }), 
                    __metadata('design:paramtypes', [])
                ], Contact);
                return Contact;
            }());
            exports_1("Contact", Contact);
        }
    }
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9jb21wb25lbnRzL2NvbnRhY3QvY29udGFjdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQVNBO2dCQUFBO29CQUVDLFVBQUssR0FBVSw4QkFBOEIsQ0FBQztvQkFDOUMsVUFBSyxHQUFVLGVBQWUsQ0FBQztvQkFDL0IsWUFBTyxHQUFVLGdDQUFnQyxDQUFDO29CQUVsRCxZQUFPLEdBQVUsRUFBRSxDQUFDO2dCQVVyQixDQUFDO2dCQVJBLCtCQUFhLEdBQWIsVUFBYyxJQUFTO29CQUN0QixJQUFJLENBQUMsT0FBTyxHQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDO2dCQUNqQyxDQUFDO2dCQUVELDZCQUFXLEdBQVg7b0JBQ0MsSUFBSSxDQUFDLE9BQU8sR0FBRSxFQUFFLENBQUM7Z0JBQ2xCLENBQUM7Z0JBbkJGO29CQUFDLGdCQUFTLENBQUM7d0JBQ1YsUUFBUSxFQUFDLFNBQVM7d0JBQ2xCLFdBQVcsRUFBQyxxQ0FBcUM7d0JBQ2pELFNBQVMsRUFBQyxDQUFDLG9DQUFvQyxDQUFDO3FCQUNoRCxDQUFDOzsyQkFBQTtnQkFpQkYsY0FBQztZQUFELENBaEJBLEFBZ0JDLElBQUE7WUFoQkQsNkJBZ0JDLENBQUEiLCJmaWxlIjoic3JjL2NvbXBvbmVudHMvY29udGFjdC9jb250YWN0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuXHJcblxyXG5AQ29tcG9uZW50KHtcclxuXHRzZWxlY3RvcjonY29udGFjdCcsXHJcblx0dGVtcGxhdGVVcmw6J3NyYy9jb21wb25lbnRzL2NvbnRhY3QvY29udGFjdC5odG1sJyxcclxuXHRzdHlsZVVybHM6WydzcmMvY29tcG9uZW50cy9jb250YWN0L2NvbnRhY3QuY3NzJ11cclxufSlcclxuZXhwb3J0IGNsYXNzIENvbnRhY3R7XHJcblxyXG5cdGVtYWlsOiBzdHJpbmc9ICdlY29tbWVyY2VAd29ybGRsaW5lLXNkY28uY29tJztcclxuXHRwaG9uZTogc3RyaW5nPSBcIiszMyBYWFhYWFhYWFhcIjtcclxuXHRhZGRyZXNzOiBzdHJpbmc9IFwiUnVlIGRlIGxhIHBvaW50ZSwgNTkxMTMgU2VjbGluXCI7XHJcblxyXG5cdG1lc3NhZ2U6IHN0cmluZz0gXCJcIjtcclxuXHJcblx0dXBkYXRlTWVzc2FnZShkYXRhOiBhbnkpe1xyXG5cdFx0dGhpcy5tZXNzYWdlPSBkYXRhLnRhcmdldC52YWx1ZTtcclxuXHR9XHJcblxyXG5cdHNlbmRNZXNzYWdlKCl7XHJcblx0XHR0aGlzLm1lc3NhZ2U9IFwiXCI7XHJcblx0fVxyXG5cclxufSJdfQ==
