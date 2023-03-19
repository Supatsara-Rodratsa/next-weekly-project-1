import { useMovie } from "@src/contexts/movieContext";
import MovieCheckBox from "../CheckBox";
import ModalDialog from "../Modal";
import Title from "../Title";

type GenreCheckBoxProps = {
  onCloseDialog(val: boolean): void;
};
const GenreCheckBox = ({ onCloseDialog }: GenreCheckBoxProps) => {
  const { selectedGenres, setSelectedGenres, allGenres } = useMovie();
  const getUpdatedValue = (name: string, value: boolean) => {
    console.log(name, value);
    if (value) {
      selectedGenres.push(name);
    } else {
      const findIndex = selectedGenres.findIndex(
        (genre: string) => genre === name
      );
      if (findIndex !== -1) {
        selectedGenres.splice(findIndex, 1);
      }
    }
    setSelectedGenres([...selectedGenres]);
  };

  const closeDialog = (val: string) => {
    if (val === "close") {
      onCloseDialog(true);
    }
  };

  return (
    <ModalDialog isOpen onClose={closeDialog}>
      <div className="flex flex-col gap-3">
        <Title color="black" customStyle="text-2xl">
          Genres
        </Title>
        <div className="grid grid-cols-3">
          {Array.from(allGenres.values()).map((genre: string, i: number) => (
            <MovieCheckBox
              key={i}
              currentValue={selectedGenres.includes(genre)}
              onChangeValue={getUpdatedValue}
              label={genre}
            />
          ))}
        </div>
      </div>
    </ModalDialog>
  );
};

export default GenreCheckBox;
