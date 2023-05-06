import { FfmpegExecutor } from './commands/ffmpeg/ffmpeg.executor';
import { ConsoleLogger } from './out/console-logger/console-logger';

export class App {
	async run() {
		new FfmpegExecutor(ConsoleLogger.getInstance()).executor();
	}
}

const app = new App();
app.run()