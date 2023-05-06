import { ICommandExecutor } from '../../core/executor/comman.types';

export interface IFfmpegInput {
	width: number;
	height: number;
	path: string;
	name: string;
}


export interface ICommandExecFfmpeg extends ICommandExecutor {
	output: string;
}