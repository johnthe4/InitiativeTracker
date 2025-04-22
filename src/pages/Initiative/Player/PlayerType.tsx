import { ColumnConfigurationItem } from "../../../components/grid/GridTypes";
import Kill from "./Kill";

export type PlayerType = {
	order?: number;
	name?: string;
	initiative?: number;
	ac?: number;
	// hp: number;
	// speed: number;
	// condition: string[];
	// notes: string[];
};

export const viewPlayerColumnConfiguration: ColumnConfigurationItem<PlayerType>[] =
	[
		{
			columnId: "order",
			columnTitle: "Order",
			columnWidth: 100,
		},
		{
			columnId: "name",
			columnTitle: "Name",
			columnWidth: 200,
			columnType: "text",
		},
		{
			columnId: "initiative",
			columnTitle: "Initiative",
			columnWidth: 200,
			columnType: "number",
		},
		{
			columnId: "ac",
			columnTitle: "AC",
			columnWidth: 200,
			columnType: "number",
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

	export const editPlayerColumnConfiguration: ColumnConfigurationItem<PlayerType>[] =
	[
		{
			columnId: "order",
			columnTitle: "Order",
			columnWidth: 100,
		},
		{
			columnId: "name",
			columnTitle: "Name",
			columnWidth: 200,
			columnType: "text",
		},
		{
			columnId: "initiative",
			columnTitle: "Initiative",
			columnWidth: 200,
			columnType: "number",
		},
		{
			columnId: "ac",
			columnTitle: "AC",
			columnWidth: 200,
			columnType: "number",
		},
	];
