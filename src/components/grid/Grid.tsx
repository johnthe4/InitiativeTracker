import { ReactNode } from "react";
import "./Grid.css";

export default function Grid<GridDataType>(
	props: Readonly<GridProps<GridDataType>>
) {
	const { columnConfiguration, data } = props;

	return (
		<table className="grid-table">
			<thead>
				<tr>
					{columnConfiguration.map((column) => (
						<th key={column.columnId} style={{ width: column.columnWidth }}>
							{column.columnTitle}
						</th>
					))}
				</tr>
			</thead>
			<tbody>
				{data.map((row, rowIndex) => (
					<tr key={rowIndex}>
						{columnConfiguration.map((column) => (
							<td key={column.columnId}>
								{/* Dynamically render cell content */}
								{(row as any)[column.columnId]}
							</td>
						))}
					</tr>
				))}
			</tbody>
		</table>
	);
}

export type GridProps<GridDataType> = {
	//  A list of columns to be shown in the grid along with the column settings
	columnConfiguration: ColumnConfiguration<GridDataType>;
	// The array of data to be displayed in the grid
	data: GridDataType[];
};

export type ColumnConfigurationItem<GridDataType> = {
	columnId: string;
	columnTitle: string;
	columnWidth: number;
	// Define a custom cell to be rendered in place of the data value
	customCellRenderer?: (
		data: GridDataType,
		columnId: keyof GridDataType
	) => ReactNode;
};

export type ColumnConfiguration<GridDataType> =
	ColumnConfigurationItem<GridDataType>[];
