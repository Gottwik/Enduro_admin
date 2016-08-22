describe('Login form', function () {
	before(function () {
		casper.start('http://localhost:5000/')
	})

	it('login form should have a form in it', function () {
		casper.then(function () {
			expect(true).to.be.ok
			expect('form').to.be.inDOM.and.be.visible
		})
	})

	it('should be able to login user', function () {
		casper.then(function () {
			casper.sendKeys('.enduro_username', 'gottwik')
			casper.sendKeys('.enduro_password', '123')
			casper.click('button')
		})
		casper.waitWhileSelector('.page-viewport', function () {
			this.capture('uitest/test.png')
			expect('.page-viewport').to.be.inDOM.and.be.visible
			expect('.publish-button').to.be.inDOM.and.be.visible
		})
	})
})
