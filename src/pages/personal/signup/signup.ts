import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { APIService } from '../../../services/api_service';
import { UtilService } from '../../../services/util_service';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
//import { TabsPage } from "../../tabs/tabs";
import { PushService } from '../../../services/push_service';
import { Storage } from '@ionic/storage';
import { TranslateService } from '@ngx-translate/core';

/**
 * Signup page component
 */
@IonicPage()
@Component({
	selector: 'page-signup',
	templateUrl: 'signup.html'
})
export class SignupPage {
	public loginForm: FormGroup;
	public active: boolean;
	public multipleCities = false;
	public cities:any[] = [];

	constructor(
		private apiService: APIService,
		private nav: NavController,
		private builder: FormBuilder,
		private util: UtilService,
		private push: PushService,
		private storage: Storage,
		private translate: TranslateService
	) {
		this.active = true;
		const fields = {
			name: ['', Validators.required],
			contactNumber: [''],
			email: ['', [Validators.required, Validators.email]],
			//password: [''],
			lastname: ['',Validators.required],
			home_address: ['',Validators.required],
			work_address: ['',Validators.required],
			subscription_type: ['',Validators.required],
			plan_start_date: ['',Validators.required],
			plan_end_date: ['',Validators.required]

		};
		this.multipleCities = (this.apiService.getSettings().multiple_cities == 1);
		if (this.multipleCities) {
			fields['city_id'] = [null, Validators.required];
			this.cities = this.apiService.getCities();
		}
		this.loginForm = this.builder.group(fields);
	}

	doSignup() {
		this.util.showLoader();
		let data = JSON.parse(JSON.stringify(this.loginForm.value));
		this.apiService.signup(data).then(response => {
			this.util.hideLoader();
			if (response.success) {
				this.push.init(this.apiService.getSettings().pushwoosh_id);
				this.storage.set('welcomeShown', '1').then(() => {}, () => {});
				this.nav.setRoot('SelectAreaPage');
			}
			else {
				this.util.alert(response.errors, '');
			}
		}, (data) => {
			this.util.hideLoader();
			this.util.alert(this.translate.instant('signup.error'), '');
		});
	}

	login() {
		this.nav.setRoot('SelectAreaPage');
	}
}
