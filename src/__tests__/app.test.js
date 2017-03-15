// Local
import { App } from '../client/app/app.js';

test("Check if 'App' name equals 'App'", () => {
    expect(App.name).toBe('App');
});