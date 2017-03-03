// @flow

// Disable flow error on these variables
declare var test: any;
declare var expect: any;

// Modules
import { App } from '../client/app/app.jsx';

test("Check if 'App' name equals 'App'", () => {
    expect(App.name).toBe('App');
});