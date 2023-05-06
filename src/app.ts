import { PropmptService } from './core/prompt/prompt.service';

export class App {
	async run() {
		const res = await (new PropmptService()).input("Число", "number");
		console.log(res);

	}
}

const app = new App();
app.run()