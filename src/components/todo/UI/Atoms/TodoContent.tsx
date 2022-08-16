import { TextareaAutosize } from '@mui/material';

type TodoContentProps = {
  value: string | undefined;
  HTMLid: string;
  onChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => void;
  editable: boolean;
  label: string;
};

const TodoContent = ({
  value,
  HTMLid,
  editable,
  onChange,
  label,
}: TodoContentProps) => {
  return (
    <TextareaAutosize
      minRows={15}
      maxRows={15}
      id={HTMLid}
      readOnly={!editable}
      placeholder={label}
      value={value}
      name={HTMLid}
      onChange={onChange}
      style={{
        border: 'none',
        fontSize: '1.25rem',
        lineHeight: '2rem',
        width: '100%',
        flex: 1,
        outline: 'none',
        cursor: editable ? 'text' : 'default',
      }}
    />
  );
};

export default TodoContent;
