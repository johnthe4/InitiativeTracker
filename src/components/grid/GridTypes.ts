import { ReactNode } from "react";

export type GridProps<GridDataType> = {
	//  A list of columns to be shown in the grid along with the column settings
	columnConfiguration: ColumnConfiguration<GridDataType>;
	// The array of data to be displayed in the grid
	data: GridDataType[];
    // If you can add a new row to the grid
    newData?: GridDataType | null | undefined;
    // Method to add the new row to the grid
    addNewRow?: () => void;
    // Should the grid data be editable
    isEditable?: boolean;
    // Handle the change of data in the grid
    // Necessary for editable grids
    handleChange?: (rowIndex: number, columnKey: string, value: string) => void;
};

export type ColumnConfigurationItem<GridDataType> = {
	columnId: string;
	columnTitle: string;
	columnWidth: number;
    // The type of data in the column, e.g., text, number, etc.
    // Necessary for editable grids, default is text
    columnType?: string;
	// Define a custom cell to be rendered in place of the data value
	customCellRenderer?: (data?: GridDataType, columnId?: string) => ReactNode;
};

export type ColumnConfiguration<GridDataType> =
	ColumnConfigurationItem<GridDataType>[];
