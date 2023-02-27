import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from 'shared/ui/Button/Button';
import { getCounterValue } from '../model/selectors/getCounterValue/getCounterValue';
import { counterAction } from '../model/slice/counterSlice';

export const Counter = () => {
    const { t } = useTranslation();
    const dispatch = useDispatch();
    const counterValue = useSelector(getCounterValue);

    const increment = () => {
        dispatch(counterAction.increment());
    };

    const decrement = () => {
        dispatch(counterAction.decrement());
    };

    return (
        <div>
            <h1 data-testid="value-title">
                {t('value')}
                {counterValue}
            </h1>
            <Button
                data-testid="increment-btn"
                onClick={increment}
            // eslint-disable-next-line i18next/no-literal-string
            >
                increment
            </Button>
            <Button
                data-testid="decrement-btn"
                onClick={decrement}
            // eslint-disable-next-line i18next/no-literal-string
            >
                decrement
            </Button>
        </div>
    );
};
