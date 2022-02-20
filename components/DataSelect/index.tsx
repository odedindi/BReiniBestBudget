import * as React from 'react';

import { Select } from '@mantine/core';

type DataSelectProps = {
	changeHandler: (value: string) => void;
	data: Categories;
	label?: string;
	name?: string;
	placeHolder?: string;
	required?: boolean;
	value: string;
};

export const DataSelect: React.FC<DataSelectProps> = ({
	changeHandler,
	data,
	label,
	name = '',
	placeHolder,
	required,
	value,
}) => {
	return (
		<Select
			name={name}
			value={value}
			onChange={changeHandler}
			data={Object.keys(data).map((id) => ({ value: id, label: data[id] }))}
			required={required}
			label={label}
			placeholder={placeHolder}
			searchable
			nothingFound="No options"
			clearable
			allowDeselect
			maxDropdownHeight={280}
			transitionDuration={80}
			transitionTimingFunction="ease"
		/>
	);
};

/**
 * <Select
  className="your-class-name"
  style={{ marginTop: 10 }}
  sx={(theme) => ({
    backgroundColor: theme.colors.gray[0],
    '&:hover': {
      backgroundColor: theme.colors.gray[1],
    },
  })}
/> 
*/
