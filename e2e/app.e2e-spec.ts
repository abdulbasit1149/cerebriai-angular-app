import { AppPage } from './app.po';
import { browser, by, element } from 'protractor';

describe('angular-demo-app App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
    page.navigateTo();
  });

  it('should display welcome message', () => {
    expect(page.getParagraphText()).toEqual('Welcome to Cerebri AI');
  });

  it('valid first name', () => {
    let first_name_field = element(by.css('app-root input.first-name-input'));
    first_name_field.sendKeys('Abdul');
    expect(first_name_field.getAttribute("class")).toMatch('ng-valid');
  })

  it('invalid first name', () => {
    let first_name_field = element(by.css('app-root input.first-name-input'));
    first_name_field.sendKeys('A');
    expect(first_name_field.getAttribute("class")).toMatch('ng-invalid');
  })


  it('valid last name', () => {
    let last_name_field = element(by.css('app-root input.last-name-input'));
    last_name_field.sendKeys('Basit');
    expect(last_name_field.getAttribute("class")).toMatch('ng-valid');
  })

  it('invalid last name', () => {
    let last_name_field = element(by.css('app-root input.last-name-input'));
    last_name_field.sendKeys('b');
    expect(last_name_field.getAttribute("class")).toMatch('ng-invalid');
  })


  it('valid email', () => {
    let email_field = element(by.css('app-root input.email-input'));
    email_field.sendKeys('a@a.com');
    expect(email_field.getAttribute("class")).toMatch('ng-valid');
  })

  it('invalid email', () => {
    let email_field = element(by.css('app-root input.email-input'));
    email_field.sendKeys('a');
    expect(email_field.getAttribute("class")).toMatch('ng-invalid');
  })


  it('valid phone number', () => {
    let phone_number_field = element(by.css('app-root input.phone-input'));
    phone_number_field.sendKeys('123-123-1232');
    expect(phone_number_field.getAttribute("class")).toMatch('ng-valid');
  })

  it('invalid phone number', () => {
    let phone_number_field = element(by.css('app-root input.phone-input'));
    phone_number_field.sendKeys('1231231232');
    expect(phone_number_field.getAttribute("class")).toMatch('ng-invalid');
  })


  it('valid city', () => {
    let city_field = element(by.css('app-root input.city-input'));
    city_field.sendKeys('Guelph');
    expect(city_field.getAttribute("class")).toMatch('ng-valid');
  })

  it('invalid city: city length must be at least 3 characters', () => {
    let city_field = element(by.css('app-root input.city-input'));
    city_field.sendKeys('ab');
    expect(city_field.getAttribute("class")).toMatch('ng-invalid');
  })

  it('invalid city: city is required field', () => {
    let city_field = element(by.css('app-root input.city-input'));
    city_field.sendKeys('');
    expect(city_field.getAttribute("class")).toMatch('ng-invalid');
  })

  it('invalid city: city cannot contain digits', () => {
    let city_field = element(by.css('app-root input.city-input'));
    city_field.sendKeys('123');
    let REGEX  = /[0-9]+/;
    expect(city_field.getAttribute("value")).toMatch(REGEX);
  })


  it('valid state', () => {
    let state_field = element(by.css('app-root input.state-input'));
    state_field.sendKeys('ONT');
    expect(state_field.getAttribute("class")).toMatch('ng-valid');
  })

  it('invalid state: state length must be at least 3 characters', () => {
    let state_field = element(by.css('app-root input.state-input'));
    state_field.sendKeys('ab');
    expect(state_field.getAttribute("class")).toMatch('ng-invalid');
  })

  it('invalid state: state is required field', () => {
    let state_field = element(by.css('app-root input.state-input'));
    state_field.sendKeys('');
    expect(state_field.getAttribute("class")).toMatch('ng-invalid');
  })

  it('invalid state: state cannot contain digits', () => {
    let state_field = element(by.css('app-root input.state-input'));
    state_field.sendKeys('123');
    let REGEX  = /[0-9]+/;
    expect(state_field.getAttribute("value")).toMatch(REGEX);
  })


  it('valid zip', () => {
    let zip_field = element(by.css('app-root input.zipcode-input'));
    zip_field.sendKeys('12345');
    expect(zip_field.getAttribute("class")).toMatch('ng-valid');
  })

  it('invalid zip: zip length must be at least 5 characters', () => {
    let zip_field = element(by.css('app-root input.zipcode-input'));
    zip_field.sendKeys('1234');
    expect(zip_field.getAttribute("class")).toMatch('ng-invalid');
  })

  it('invalid zip: zip is required field', () => {
    let zip_field = element(by.css('app-root input.zipcode-input'));
    zip_field.sendKeys('');
    expect(zip_field.getAttribute("class")).toMatch('ng-invalid');
  })

  it('invalid zip: zip cannot contain digits', () => {
    let zip_field = element(by.css('app-root input.zipcode-input'));
    zip_field.sendKeys('abcd');
    let REGEX  = /[a-zA-Z]+/;
    expect(zip_field.getAttribute("value")).toMatch(REGEX);
  })

  it('valid form', () => {
    let form = element(by.css('app-root form'));

    element(by.css('app-root input.first-name-input')).sendKeys('Abdul');
    element(by.css('app-root input.last-name-input')).sendKeys('Basit');
    element(by.css('app-root div.male-input input')).click();
    element(by.css('app-root select')).click();
    element(by.css('app-root select option')).click();
    element(by.css('app-root input.email-input')).sendKeys('a@a.com');
    element(by.css('app-root input.phone-input')).sendKeys('123-123-1232');
    element(by.css('app-root input.city-input')).sendKeys('Guelph');
    element(by.css('app-root input.state-input')).sendKeys('ONT');
    element(by.css('app-root input.zipcode-input')).sendKeys('12345');

    form.submit();

    let alert = browser.switchTo().alert();
    expect(alert.getText()).toMatch('SUCCESS');
    alert.accept();
    expect(form.getAttribute("class")).toMatch('ng-valid');
  })

  it('invalid form: missing fields', () => {
    let form = element(by.css('app-root form'));

    element(by.css('app-root input.first-name-input')).sendKeys('Abdul');

    form.submit();
    expect(form.getAttribute("class")).toMatch('ng-invalid');
  })


  it('valid reset form', () => {
    // Fill out the form
    element(by.css('app-root input.first-name-input')).sendKeys('Abdul');
    element(by.css('app-root input.last-name-input')).sendKeys('Basit');
    element(by.css('app-root div.male-input input')).click();
    element(by.css('app-root select')).click();
    element(by.css('app-root select option')).click();
    element(by.css('app-root input.email-input')).sendKeys('a@a.com');
    element(by.css('app-root input.phone-input')).sendKeys('123-123-1232');
    element(by.css('app-root input.city-input')).sendKeys('Guelph');
    element(by.css('app-root input.state-input')).sendKeys('ONT');
    element(by.css('app-root input.zipcode-input')).sendKeys('12345');
  
    // Check if form is valid
    expect(element(by.css('app-root form')).getAttribute("class")).toMatch('ng-valid');

    // Click "Reset" Form
    element(by.css('app-root button[type="reset"]')).click();

    // Check if form is invalid
    expect(element(by.css('app-root form')).getAttribute("class")).toMatch('ng-invalid');
  })

});
