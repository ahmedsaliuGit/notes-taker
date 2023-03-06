import { Badge, Col, Row, Stack } from "react-bootstrap";
import { useNote } from "./NotesLayout";

export const Note = () => {
  const note = useNote();

  return (
    <Row className="align-items-center mb-4">
      <Col>
        <h1>{note.title}</h1>
        {note.tags.length > 0 && (
          <Stack direction="horizontal" gap={1} className="flex-wrap">
            {note.tags.map((tag) => (
              <Badge key={tag.id} className="text-truncate">
                {tag.label}
              </Badge>
            ))}
          </Stack>
        )}
      </Col>
    </Row>
  );
};
