import { BugButton } from 'app/providers/ErrorBoundary';
import { Counter } from 'entities/Counter';
import { useTranslation } from 'react-i18next';

function MainPage() {
    const { t } = useTranslation();

    return (
        <div>
            <BugButton />
            <Counter />
            {t('Главная страница')}
        </div>
    );
}

export default MainPage;
