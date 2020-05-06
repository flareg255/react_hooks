import React from 'react'

function Title() {
    console.log(`Title component`);
    return (
        <div>
            <p>useCallback hookによる最適化</p>
        </div>
    )
}

export default React.memo(Title)
