import React from 'react';
import Autocomplete from '@material-ui/lab/Autocomplete';

function LabelTag({handleLabelTag}) {

  // const {
  //   labels,
  // } = useSelector(state => state.appState);


  // const handleClick = (event, course) => {
  //   handleCourseSelect(course)
  // };

  return (
    <Autocomplete
      id="labelTag"
      options={labels}
      disableCloseOnSelect
      disableClearable
      getOptionLabel={option => option}
      renderOption={(option, { selected }) => (
        <div
          onClick={event => handleLabelTag(event, option)}
        >
          <Checkbox
            icon={icon}
            checkedIcon={checkedIcon}
            checked={selected}
            onClick={event => handleLabelTag(event, option)}
          />
          {option}
        </div>
      )}
      renderInput={params => (
        <TextField {...params} variant="outlined"
        name = "catalogueInfo"
        label="Tag Label" placeholder="Lable..." />
      )}
    />
  );
}
