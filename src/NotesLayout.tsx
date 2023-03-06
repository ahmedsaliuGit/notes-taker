import {
  Navigate,
  Outlet,
  useOutletContext,
  useParams,
} from "react-router-dom";
import { Note } from "./App";

type NotesLayoutProps = {
  notes: Note[];
};

export const NotesLayout = ({ notes }: NotesLayoutProps) => {
  const { id } = useParams();
  const note = notes.find((note) => note.id === id);

  if (note === undefined) return <Navigate to="/" replace />;

  return <Outlet context={note} />;
};

export const useNote = () => {
  return useOutletContext<Note>();
};
