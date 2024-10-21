import list_json from "../etsy.json"


type TItem = {
    listing_id: number
    url?: string 
    MainImage?: string 
    title?: string 
    currency_code?: string 
    price?: string 
    quantity?: number 
}



type TItemProps = {
    item: TItem
}


function Item({item}: TItemProps) {        
    item.title = (item.title && item.title.length > 50) ?  item.title.slice(0, 50) + "..." : item.title

    let formatPrice = ''
    if (item.currency_code == 'USD') {
      formatPrice = `$ ${item.price}`
    } else if (item.currency_code == 'EUR') {
      formatPrice = `€ ${item.price}`
    } else {
      formatPrice = `${item.price} ${item.currency_code}`
    }
    
    let level: string = 'medium'
    if (item.quantity && item.quantity <= 10) {
        level = 'low'
    }
    else if ( item.quantity && item.quantity > 20) {
       level = 'high'
    }
    return (
        <div className="item">
        <div className="item-image">
          <a href="https://www.etsy.com/listing/292754135/woodland-fairy">
            <img src={item.MainImage}/>
          </a>
        </div>
        <div className="item-details">
          <p className="item-title">{item.title}</p>
          <p className="item-price">{formatPrice}</p>
          <p className={`item-quantity level-${level}`}>{item.quantity} left</p>
        </div>
      </div>
    )
  }

export default function Listing() {
  return (
    <div className="item-list">
        {list_json.map(itemFull => {
            const item:TItem = {
                listing_id: itemFull.listing_id,
                url: itemFull.url,
                MainImage: itemFull.MainImage?.url_570xN,
                title: itemFull.title,
                currency_code: itemFull.currency_code,
                price: itemFull.price,
                quantity: itemFull.quantity
            }
            if (!item.title){return}    
            return <Item key={item.listing_id} item={item}/>
            }            
        )
        }
    </div>
    
  )
}
