// @flow

// Disable flow errors on these variables
declare var test: any;
declare var expect: any;

// Local
import App from '../client/app/app.jsx';

test("Check if 'App' name equals 'App'", () => {
    expect(App.name).toBe('App');
});