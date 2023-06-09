use super::super::*;
use super::*;

#[derive(serde::Serialize)]
pub struct Res {
    article: ResArticle,
}

pub async fn handler(req: tide::Request<crate::State>) -> tide::Result {
    let article_id = req.param("slug")?;

    let article_id = str_to_uuid(article_id)?;

    let db_pool = &req.state().postgres_pool;

    let article_entity = crate::applications::article::get(db_pool, article_id).await?;

    let res_article = get_res_article(article_entity, None, db_pool).await?;

    response_ok_and_json(Res {
        article: res_article
    })
}