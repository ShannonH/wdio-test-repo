import {$, browser} from '@wdio/globals'
import Page from './page.js';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class iFramePage extends Page {
    /**
     * define selectors using getter methods
     */
    public get editor () {
        return $('#tinymce');
    }

    public async assertEditorContent(content: string) {
        await this.switchToFrame();
        await expect(this.editor).toHaveText(content);
    }

    public async switchToFrame () {
        await browser.switchFrame('https://the-internet.herokuapp.com/iframe');
    }

    /**
     * overwrite specific options to adapt it to page object
     */
    public open () {
        return super.open('iframe');
    }
}

export default new iFramePage();
