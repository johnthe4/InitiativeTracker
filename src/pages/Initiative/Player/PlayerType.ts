import { ColumnConfigurationItem } from "../../../components/grid/Grid";

export type PlayerType = {
	id: string;
	name: string;
	initiative: number;
	ac: number;
	// hp: number;
	// speed: number;
	// condition: string[];
	// notes: string[];
};

export const playerColumnConfiguration: ColumnConfigurationItem<PlayerType>[] =
	[
		{
			columnId: "id",
			columnTitle: "Name",
			columnWidth: 200,
		},
	];
