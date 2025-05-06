import "./Grid.css";
import { GridProps } from "./GridTypes";

export default function Grid<GridDataType>({
	columnConfiguration,
	data,
	newData,
	addNewRow,
	isEditable,
	handleChange,
}: Readonly<GridProps<GridDataType>>) {
	return (
		<div className="grid-container">
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
								<td key={column.columnId} style={{ width: column.columnWidth }}>
									{/* If the column is editable, show an input field, otherwise show the data value */}
									{/* If a custom cell renderer is provided, use that instead of the default value */}
									{isEditable && handleChange ? (
										<input
											type={column.columnType === "number" ? "number" : "text"}
											value={String(
												row[column.columnId as keyof GridDataType] ?? ""
											)}
											onChange={(e) => {
												handleChange(rowIndex, column.columnId, e.target.value);
											}}
										/>
									) : column.customCellRenderer ? (
										column.customCellRenderer(row, column.columnId)
									) : (
										String(row[column.columnId as keyof GridDataType] ?? "")
									)}
								</td>
							))}
						</tr>
					))}
					{isEditable && handleChange && (
						<tr key={data.length}>
							{columnConfiguration.map((column) => (
								<td key={column.columnId} style={{ width: column.columnWidth }}>
									<input
										type={column.columnType === "number" ? "number" : "text"}
										value={
											newData
												? String(
														newData[column.columnId as keyof GridDataType] ?? ""
												  )
												: ""
										}
										onChange={(e) => {
											handleChange(
												data.length,
												column.columnId,
												e.target.value
											);
										}}
									/>
								</td>
							))}
						</tr>
					)}
				</tbody>
			</table>
			{isEditable && newData && addNewRow && (
				<button onClick={addNewRow}>Add Row</button>
			)}
		</div>
	);
}

// type CellRenderProps = {
// 	column: ColumnConfigurationItem<any>;
// 	row: any;
// 	rowIndex: number;
// 	isEditable: boolean;
// };

// function CellRender({ columnConfiguration, row, rowIndex }: CellRenderProps) {
// 	return (
// 		<td key={column.columnId} style={{ width: column.columnWidth }}>
// 			{/* If the column is editable, show an input field, otherwise show the data value */}
// 			{/* If a custom cell renderer is provided, use that instead of the default value */}
// 			{isEditable && handleChange ? (
// 				<input
// 					type={column.columnType === "number" ? "number" : "text"}
// 					value={String(row[column.columnId as keyof GridDataType] ?? "")}
// 					onChange={(e) => {
// 						handleChange(rowIndex, column.columnId, e.target.value);
// 					}}
// 				/>
// 			) : column.customCellRenderer ? (
// 				column.customCellRenderer(row, column.columnId)
// 			) : (
// 				String(row[column.columnId as keyof GridDataType] ?? "")
// 			)}
// 		</td>
// 	);
// }
