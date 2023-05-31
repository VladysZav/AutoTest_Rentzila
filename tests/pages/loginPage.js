const { expect } = require('@playwright/test');
const { Base } = require('./basePage')

exports.LoginPage = class LoginPage extends Base {
    /**
     * @param {import('@playwright/test').Page} page
     */
    constructor(page){
        super();
        this.page = page;
        this.loginButton = page.locator('div[class*="Navbar_btn_enter"]');
        this.exitButton = page.locator('[data-testid="logout"]');
        this.emailAndPhoneInput = page.locator("#email");
        this.passwordInput = page.locator("#password");
        this.signInButton = page.locator('button[class*="LoginForm_submitBtn"]');
        this.authorizationPopUp = page.locator('div[class*="Authorization_popup"]');
        this.profileEmailOfDropDownMenu = page.locator('div[class*="ProfileDropdownMenu_email"]');
        this.profileDropDownMenu = page.locator('div[class*="ProfileDropdownMenu_container"]');
        this.closeButton = page.locator("//*[@data-testid='authClose']");
        this.errorMessageEmailField = page.locator('form > div.CustomReactHookInput_field__ys1mK > p')
        this.errorMessagePasswordField = page.locator('div:nth-child(2) > div.CustomReactHookInput_field__ys1mK > p')
        this.errorMessageEmailOrPasswordInvalid = page.locator('div[data-testid="errorMessage"]')
        this.forgotPasswordButton = page.locator('div[class="LoginForm_link__wiXuw"]').and(page.getByText('Забули пароль?'))
        this.emailAndPhoneInputInForgotPasswordPopUp = page.locator('form[class*="RestorePassword"] input[name="login"]')
        this.XButtonForgotPasswordPopUp = page.locator('div[class*="RestorePassword"] svg[data-testid="crossDeleteIcon"]')
        this.errorMessageMainPasswordPopUp = page.locator('div[class*="RestorePasswordPopup_error"]')
        this.errorMessageInputForgotPasswordPopUp = page.locator('form[class*="RestorePassword"] p[class*="CustomReactHookInput_error"]')
        this.forgotPasswordPopUp = page.locator('div[class="RestorePasswordPopup_container__OMdQ5"]')
        this.submitButtonForgotPasswordPopUp = page.locator('button[class*="RestorePasswordPopup_submitBtn"]')
        this.passwordEyeButtonClose = page.locator('svg[data-testid="passwordEye2Icon"]')
        this.passwordEyeButtonOpen = page.locator('svg[data-testid="okoIcon"]')
        this.navbarAvatarButton = page.locator('div[class*="Navbar_avatarBlock"]')
        this.logOutButton = page.locator('div[data-testid="logout"]')
        this.emailInNavbar = page.locator('div[data-testid="email"]')
    }

    async goToLogin() {
        await this.navigate()
        await this.page.waitForTimeout(500);
    }
    async clickOnLoginButton() {
        await this.loginButton.click()
        await this.page.waitForTimeout(500);
    }
    async logInPopUpIsDisplayed() {
        await expect(this.authorizationPopUp).toBeVisible();
    }
    async clickOnSignInButton() {
        await this.signInButton.click()
    }
    async verifyErrorMessageEmailInputEmpty() {
        await expect(this.errorMessageEmailField).toContainText('Поле не може бути порожнім')
    }
    async verifyErrorMessagePasswordInputEmpty() {
        await expect(this.errorMessagePasswordField).toContainText('Поле не може бути порожнім')
    }
    async verifyErrorMessageEmailInputInvalid() {
        await expect(this.errorMessageEmailField).toContainText('Неправильний формат email або номера телефону')
    }
    async verifyErrorMessagePasswordInputInvalid() {
        await expect(this.errorMessagePasswordField).toContainText('Пароль повинен містити як мінімум 1 цифру, 1 велику літеру і 1 малу літеру, також не повинен містити кирилицю та пробіли')
    }
    async verifyErrorMessageEmailOrPasswordInvalid() {
        await expect(this.errorMessageEmailOrPasswordInvalid).toContainText('Невірний e-mail або пароль')
    }
    async enterValidEmail() {
        await this.emailAndPhoneInput.fill('123@gmail.com')
    }
    async enterValidPassword() {
        await this.passwordInput.fill('12345Qwerty!')
    }
    async enterValidEmail1() {
        await this.emailAndPhoneInput.fill('testuserrentzila@gmail.com')
    }
    async enterValidPassword1() {
        await this.passwordInput.fill('Testuser10')
    }
    async enterValidEmail2() {
        await this.emailAndPhoneInput.fill('TESTUSERRENTZILA@GMAIL.COM')
    }
    async enterInvalidEmailOrPhone(emailOrPhone) {
        await this.emailAndPhoneInput.fill(emailOrPhone)
    }
    async enterInvalidPassword(password) {
        await this.passwordInput.fill(password)
    }
    async clearEmailInput() {
        await this.emailAndPhoneInput.clear()
    }
    async clearPasswordInput() {
        await this.passwordInput.clear()
    }
    async clickOnForgotPasswordButton() {
        await this.forgotPasswordButton.click()
    }
    async enterEmailOrPhoneForgotPasswordPopUp(emailOrPhone) {
        await this.emailAndPhoneInputInForgotPasswordPopUp.fill(emailOrPhone)
    }
    async clearEmailOrPhoneForgotPasswordPopUp() {
        await this.emailAndPhoneInputInForgotPasswordPopUp.clear()
    }
    async clickOnXbuttonForgotPasswordPopUp() {
        await this.XButtonForgotPasswordPopUp.click()
    }
    async verifyEmailInputForgotPasswordPopUpEmpty() {
        await expect(this.errorMessageInputForgotPasswordPopUp).toContainText('Поле не може бути порожнім')
    }
    async verifyEmailInputForgotPasswordPopUpInvalid() {
        await expect(this.errorMessageInputForgotPasswordPopUp).toContainText('Неправильний формат email або номера телефону')
    }
    async verifyMainErrorMessageForgotPasswordPopUpInvalid() {
        await expect(this.errorMessageMainPasswordPopUp).toContainText('Користувач з таким емейлом або номером телефону не верифікований в системі')
    }
    async verifyforgotPasswordPopUp() {
        await expect(this.forgotPasswordPopUp).toBeVisible()
    }
    async clickOnSubmitButtonForgotPasswordPopUp() {
        await this.submitButtonForgotPasswordPopUp.click()
    }
    async clickOnPasswordEye() {
        await this.passwordEyeButtonClose.click()
        await this.passwordEyeButtonOpen.click()
    }
    async clickOnNavbarBlockButton() {
        await this.navbarAvatarButton.click()
    }
    async verifyEmailAccount(email) {
        await expect(this.emailInNavbar).toContainText(email)
    }
    async clickOnLogOutButton() {
        await this.logOutButton.click()
    }
};