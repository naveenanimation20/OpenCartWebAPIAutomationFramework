import { Locator } from "@playwright/test";

export class CartPage {
    //private locators:
    private readonly logoutLink: Locator;

    //action
    async isLogoutLinkExist(): Promise<boolean> {
        return await this.logoutLink.isVisible();
    }
}