import Footer from '../Footer/Footer';
import styles from './App.module.css'
import { Route, Routes } from 'react-router-dom';
import FunctionPage from '../../pages/FunctionPage/FunctionPage';
import MainPage from '../../pages/MainPage/MainPage';
import ProccesPage from '../../pages/ProccesPage/ProccesPage';
import AdvicePage from '../../pages/AdvicePage/AdvicePage';
import FirmPage from '../../pages/FirmPage/FirmPage';
import FaqPage from '../../pages/FaqPage/FaqPage';
import WikiPage from '../../pages/WikiPage/WikiPage';
import ImpressumPage from '../../pages/ImpressumPage/ImpressumPage';
import FormPage from '../../pages/FormPage/FormPage';
import ArticleItemPage from '../../pages/ArticleItemPage/ArticleItemPage';
import PrivacyPage from '../../pages/PrivacyPage/PrivacyPage';
import ArticlesPage from '../../pages/ArticlesPage/ArticlesPage';
import ErrorPage from '../../pages/ErrorPage/ErrorPage';
import { articlePATH, articlesPATH, beratungPATH, datenschutzPATH, errorPATH, faqPATH, funktionenPATH, impressumPATH, kontaktPATH, mainPATH, prozessPATH, searchPATH, unternehmenPATH, wikiPATH } from '../../utils/constants';
import SearchPage from '../../pages/SearchPage/SearchPage';
import Header from '../header/header';


function App() {
  return (
    <div className={styles.main_container}>
      <Header />
      <main className={styles.wrapper}>
      <Routes>
        <Route path={mainPATH} element={<MainPage />} />
        <Route path={funktionenPATH} element={<FunctionPage />}/>
        <Route path={prozessPATH} element={<ProccesPage isSpoiler={false} />}/>
        <Route path={beratungPATH} element={<AdvicePage isSpoiler={false} />}/>
        <Route path={unternehmenPATH} element={<FirmPage />}/>
        <Route path={faqPATH} element={<FaqPage />}/>
        <Route path={wikiPATH} element={<WikiPage />} />
        <Route path={impressumPATH} element={<ImpressumPage />} />
        <Route path={kontaktPATH} element={<FormPage />} />
        <Route path={articlePATH} element={<ArticleItemPage />} />
        <Route path={datenschutzPATH} element={<PrivacyPage />} />
        <Route path={articlesPATH} element={<ArticlesPage />} />
        <Route path={searchPATH} element={<SearchPage isSubTitle={false} />} />
        <Route path={errorPATH} element={<ErrorPage />} />
      </Routes>
      </main> 
      <Footer />
    </div>
  );
}

export default App;
