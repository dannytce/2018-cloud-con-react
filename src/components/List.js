import React from 'react'

import { List as SpectacleList, ListItem, Appear } from 'spectacle'

const List = ({ data = [], startFrom = 0, endAt = 0 }) => (
  <SpectacleList>
    {data.map((item, index) => {
      const isHidden = endAt !== 0 && index + 1 > endAt
      const isApper = index + 1 > startFrom && !isHidden

      const Wrapper = isApper ? Appear : React.Fragment
      const props = {
        ...(isApper ? { order: index } : {}),
      }

      return (
        <Wrapper {...props} key={index}>
          <ListItem
            textSize={30}
            style={{
              visibility: isHidden ? 'hidden' : 'visible',
              padding: '10px 0',
            }}
          >
            {item.link ? (
              <a href={item.link} target="_blank">
                {item.text}
              </a>
            ) : (
              item.text
            )}
          </ListItem>
        </Wrapper>
      )
    })}
  </SpectacleList>
)

export default List
