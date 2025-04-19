import { ColumnConfigurationItem } from "../../../components/grid/Grid";
import Kill from "./Kill";

export type PlayerType = {
	id: string;
	order: number;
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
			columnId: "order",
			columnTitle: "Order",
			columnWidth: 200,
		},
		{
			columnId: "name",
			columnTitle: "Name",
			columnWidth: 200,
		},
		{
			columnId: "initiative",
			columnTitle: "Initiative",
			columnWidth: 200,
		},
		{
			columnId: "ac",
			columnTitle: "AC",
			columnWidth: 200,
		},
		{
			columnId: "kill",
			columnTitle: "Remove",
			columnWidth: 200,
			customCellRenderer: () => {
				return <Kill />;
			},
		},
	];
