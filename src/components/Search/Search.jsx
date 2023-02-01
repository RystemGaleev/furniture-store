import { CiSearch } from 'react-icons/ci';
import { AiOutlineClose } from 'react-icons/ai';
import style from './Search.module.scss';
import { useTranslation } from 'react-i18next';

export const Search = ({ setSearchValue, searchValue }) => {
  const { t } = useTranslation();
  return (
    <div className={style.searchBlock}>
      <input
        value={searchValue}
        type="text"
        className={style.search}
        placeholder={t('products.search')}
        onChange={(e) => setSearchValue(e.target.value)}
      />
      {searchValue.length > 1 ? (
        <AiOutlineClose
          onClick={() => setSearchValue('')}
          className={style.icon}
          size={28}
        />
      ) : (
        <CiSearch className={style.icon} size={28} />
      )}
    </div>
  );
};
