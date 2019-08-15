using Bsd.Cars.Application.Orders;
using Bsd.Cars.Application.Orders.Responses;
using Bsd.Cars.Application.Shared;
using MediatR;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;

namespace Bsd.Cars.Api.Features.Inventories
{
    [ApiController]
    [ApiVersion(ApiConstants.ApiVersionV1)]
    [Route(ApiConstants.BaseApiRoute + "/Orders")]
    public class OrdersController : ControllerBase
    {
        private readonly IMediator _mediator;

        public OrdersController(IMediator mediator)
        {
            _mediator = mediator;
        }

        [HttpPost(ApiConstants.AllOrders)]
        [ProducesResponseType(typeof(PaginatedResponse<OrderModel>), StatusCodes.Status200OK)]
        [ProducesResponseType(typeof(ProblemDetails), StatusCodes.Status500InternalServerError)]        
        public async Task<ActionResult<PaginatedResponse<OrderModel>>> GetCompanies([FromBody] GetOrdersRequest request)
        {
            var result = await _mediator.Send(request);
            return Ok(result);
        }
    }
}
