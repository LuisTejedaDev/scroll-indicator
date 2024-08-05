import {ScrollIndicator} from '.'
import {useScrollIndicator} from '../hooks'
import Animated from 'react-native-reanimated'

export default ({children, indicator = true, color = '#2874a6'}) => {

    const {handleLayout, handleContentSizeChange, scrollHandler, containerStyles, indicatorHeight,  translateStyles} = useScrollIndicator()

    return(
        <>
            {
                indicator
                &&
                    <ScrollIndicator
                        containerStyles={containerStyles}
                        indicatorHeight={indicatorHeight}
                        translateStyles={translateStyles}
                        color={color}
                    />
            }
            <Animated.ScrollView
                bounces={false}
                showsVerticalScrollIndicator={false}
                onScroll={scrollHandler}
                style={{height: 'auto', alignSelf: 'stretch', padding: 14}}
                onContentSizeChange={handleContentSizeChange}
                onLayout={handleLayout}
            >
                {children}
            </Animated.ScrollView>
        </>
    )
}