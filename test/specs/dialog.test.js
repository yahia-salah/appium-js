const dialog = require("../../pageObjects/dialog.page");
const expect = require("chai").expect;

describe("Dialog", () => {
  afterEach(async function () {
    // runs before each test in this block
    await browser.reloadSession();
  });

  it("Verify that the text entry dialog username & password fields are editable", async () => {
    await dialog.appBtn.click();
    await dialog.alertDialogsBtn.click();
    await dialog.textEntryDialogBtn.click();

    await dialog.userNameField.clearValue();
    await dialog.userNameField.addValue("test");
    await dialog.passwordField.clearValue();
    await dialog.passwordField.addValue("12345");

    await driver.pause(2000);

    let userName = await dialog.userNameField.getText();
    console.log(`userName has value of ${userName}`);
    expect(userName).equal("test");

    await dialog.dialogOkBtn.click();
  });

  it("Scrolls", async () => {
    await dialog.viewsBtn.click();

    await driver.touchAction([
      { action: "press", x: 500, y: 1400 },
      { action: "moveTo", x: 500, y: 300 },
      { action: "release" },
    ]);

    await driver.pause(2000);
  });
});
